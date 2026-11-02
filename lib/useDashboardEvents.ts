"use client";

import { useEffect, useRef } from "react";

export interface DashboardEventPayload {
  id?: string;
  type: string;
  timestamp?: string;
  data: Record<string, any>;
}

type EventListener = (event: DashboardEventPayload) => void;

class EventManager {
  private es: EventSource | null = null;
  private listeners = new Set<EventListener>();
  private reconnectTimer: NodeJS.Timeout | null = null;
  private isConnecting = false;

  public subscribe(fn: EventListener) {
    this.listeners.add(fn);
    if (!this.es && !this.isConnecting && typeof window !== "undefined") {
      this.connect();
    }
    return () => {
      this.listeners.delete(fn);
      if (this.listeners.size === 0) {
        this.disconnect();
      }
    };
  }

  private connect() {
    if (typeof window === "undefined") return;
    this.isConnecting = true;
    try {
      this.es = new EventSource("/api/dashboard/events", { withCredentials: true });

      const handleEvent = (type: string, e: MessageEvent) => {
        try {
          const data = JSON.parse(e.data);
          const payload: DashboardEventPayload = {
            id: e.lastEventId,
            type,
            data,
          };
          for (const l of this.listeners) {
            try {
              l(payload);
            } catch {
              // Ignore subscriber errors
            }
          }
        } catch {
          // Ignore parse errors
        }
      };

      const eventTypes = [
        "system.connected",
        "wallet.balance.updated",
        "wallet.reservation.created",
        "wallet.reservation.released",
        "payment.completed",
        "payment.failed",
        "ledger.entry.created",
        "usage.request.started",
        "usage.request.completed",
        "usage.request.failed",
      ];

      for (const t of eventTypes) {
        this.es.addEventListener(t, (e: any) => handleEvent(t, e));
      }

      this.es.onopen = () => {
        this.isConnecting = false;
      };

      this.es.onerror = () => {
        this.isConnecting = false;
        if (this.es) {
          this.es.close();
          this.es = null;
        }
        if (this.listeners.size > 0 && !this.reconnectTimer) {
          this.reconnectTimer = setTimeout(() => {
            this.reconnectTimer = null;
            this.connect();
          }, 5000);
        }
      };
    } catch {
      this.isConnecting = false;
    }
  }

  private disconnect() {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    if (this.es) {
      this.es.close();
      this.es = null;
    }
    this.isConnecting = false;
  }
}

export const eventManager = new EventManager();

export function useDashboardEvents(onEvent?: EventListener) {
  const handlerRef = useRef(onEvent);
  handlerRef.current = onEvent;

  useEffect(() => {
    if (!handlerRef.current) return;
    return eventManager.subscribe((evt) => {
      handlerRef.current?.(evt);
    });
  }, []);
}
