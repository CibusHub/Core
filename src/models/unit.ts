/**
 * This defines a unit of measurement, and provides the mechanisms needed to convert it.
 */
export interface Unit {
  name: string;
  acronym: string;
  type: 'weight' | 'volume' | 'quantity';
  ratioToStandard: number;
}