import { ARENAS, AUDIENCES, BRAND, COMPETITORS, CONNECTORS, FACTS, PRODUCTS, WORKSPACE } from "./catalog";
import { MOVEMENTS, OPPORTUNITIES } from "./culture";
import { ANALYTICS, CAMPAIGNS, NOTIFICATIONS } from "./work";

export {
  ARENAS,
  AUDIENCES,
  BRAND,
  COMPETITORS,
  CONNECTORS,
  FACTS,
  PRODUCTS,
  WORKSPACE,
  MOVEMENTS,
  OPPORTUNITIES,
  ANALYTICS,
  CAMPAIGNS,
  NOTIFICATIONS,
};

export function movementById(id: string) {
  return MOVEMENTS.find((m) => m.id === id);
}

export function opportunityById(id: string) {
  return OPPORTUNITIES.find((o) => o.id === id);
}

export function productById(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}

export function campaignById(id: string) {
  return CAMPAIGNS.find((c) => c.id === id);
}

export function audienceById(id: string) {
  return AUDIENCES.find((a) => a.id === id);
}
