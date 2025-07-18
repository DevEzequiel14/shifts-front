import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Base',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Turnos',
          route: '/dashboard',
          children: [
            { label: 'Ver agenda de turnos', route: '/dashboard/turnos/agenda' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/cog-6-tooth.svg',
          label: 'Horarios',
          route: '/dashboard',
          children: [{ label: 'Configuración de horarios', route: '/dashboard/horarios/configuracion' }],
        },

        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'Formulario',
          route: '/dashboard',
          children: [
            { label: 'Configuración de campos del formulario', route: '/dashboard/formulario/configuracion' },
          ],
        },
      ],
    },
  ];
}
