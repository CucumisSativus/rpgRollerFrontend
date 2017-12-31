export interface CombatActorPresenter {
  "id": string;
  "name": string;
  "hp": number;
  "statistics": Statistics;
}
export interface Statistics {
  "weaponSkill": number;
  "ballisticSkill": number;
  "strength": number;
  "toughness": number;
  "agility": number;
  "intelligence": number;
  "perception": number;
  "willPower": number;
  "fellowship": number;
  "influence": number;
}