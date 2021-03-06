export interface Recipe {
  resId: string;
  name: string;
  type: string;
  timeMinutes: number;
  img: string;
  ingredients: string;
  steps: string;
  uid?: string;
  displayName?: string;
  authorPhotoURL?: string;
}
