/**
 * Sistema de configuración para creadores UGC reutilizables
 * Este archivo centraliza toda la configuración de la landing
 */

import creadorConfig from './creador.json';

export type Creador = typeof creadorConfig;

interface CSSVariables {
  [key: string]: string;
}

/**
 * Obtiene la configuración completa del creador
 */
export function getCreadorConfig(): Creador {
  return creadorConfig;
}

/**
 * Obtiene un valor específico de la configuración del creador
 */
export function getCreadorValue<T = any>(path: string, defaultValue?: T): T {
  const keys = path.split('.');
  let value: any = creadorConfig;

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return defaultValue as T;
    }
  }

  return value as T;
}

/**
 * Carga los colores como variables CSS
 * Esto permite que el CSS use variables personalizadas del creador
 */
export function loadCreadorColors(): void {
  const root = document.documentElement;
  const colors = creadorConfig.colores;

  // Mapeo de colores a variables CSS
  const colorMapping: CSSVariables = {
    '--color-vibrant-magenta': colors.primario,
    '--color-strong-purple': colors.secundario,
    '--color-whatsapp': colors.terciario,
    '--bg-light': colors.fondo,
    '--bg-light-secondary': colors.fondo_alterno,
    '--bg-light-tertiary': colors.fondo_claro,
    '--bg-light-quaternary': colors.fondo_claro2,
    '--color-text': colors.texto,
    '--color-text-muted': colors.texto_muted,
  };

  // Aplicar variables CSS
  Object.entries(colorMapping).forEach(([varName, value]) => {
    root.style.setProperty(varName, value);
  });

  // Colores gradiente basados en la configuración
  root.style.setProperty('--gradient-hot', colors.gradiente_hot);
  root.style.setProperty('--gradient-neon', colors.gradiente_neon);
}

/**
 * Hook para usar la configuración del creador en componentes
 * Ejemplo: const config = useCreadorConfig();
 */
export function useCreadorConfig() {
  return getCreadorConfig();
}

/**
 * Genera variables CSS personalizadas para temas dinámicos
 */
export function generateCreadorTheme(colores: typeof creadorConfig.colores): string {
  return `
    :root {
      --color-vibrant-magenta: ${colores.primario};
      --color-strong-purple: ${colores.secundario};
      --color-whatsapp: ${colores.terciario};
      --bg-light: ${colores.fondo};
      --bg-light-secondary: ${colores.fondo_alterno};
      --bg-light-tertiary: ${colores.fondo_claro};
      --bg-light-quaternary: ${colores.fondo_claro2};
      --color-text: ${colores.texto};
      --color-text-muted: ${colores.texto_muted};
      --gradient-hot: ${colores.gradiente_hot};
      --gradient-neon: ${colores.gradiente_neon};
    }
  `;
}

/**
 * Obtiene información de contacto del creador
 */
export function getContactInfo() {
  return {
    nombre: creadorConfig.creador.nombre,
    email: creadorConfig.creador.email,
    telefono: creadorConfig.creador.telefono,
    instagram: creadorConfig.creador.instagram,
    whatsapp: creadorConfig.creador.whatsapp,
    tiktok: creadorConfig.creador.tiktok,
  };
}

/**
 * Obtiene datos de redes sociales formateados
 */
export function getSocialLinks() {
  const { creador } = creadorConfig;
  return {
    instagram: {
      url: creador.instagram,
      label: 'Instagram',
      icon: '📸',
    },
    whatsapp: {
      url: creador.whatsapp,
      label: 'WhatsApp',
      icon: '💬',
    },
    tiktok: {
      url: creador.tiktok,
      label: 'TikTok',
      icon: '🎵',
    },
    email: {
      url: `mailto:${creador.email}`,
      label: 'Email',
      icon: '📧',
    },
  };
}

export default creadorConfig;
