// Material Pages Index
import { redirect } from 'next/navigation';

export default function MaterialsIndex() {
  // Redirect to main materials page
  redirect('/materials');
}

export { default as CobrePage } from './CobrePage';
export { default as BroncePage } from './BroncePage';
export { default as AluminiumPage } from './AluminiumPage';
export { default as FierroLataPage } from './FierroLataPage';
export { default as FierroLargoPage } from './FierroLargoPage';
export { default as FierroCortoPage } from './FierroCortoPage';
export { default as FierroMixtoPage } from './FierroMixtoPage';
export { default as VirutaPage } from './VirutaPage';
export { default as ElectricoPage } from './ElectricoPage'; 