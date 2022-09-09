export interface Stuff {
  settings: Settings;

}

export interface Settings {
  completedItemMoveBehaviour: 'immediately' | 'daily' | 'manually';
  badgeCount: 'none' | 'deadlines only' | 'today' | 'today + inbox';
  groupTodayTodos: boolean;
  preserveWindowWidth: boolean;
  thingsUrlsEnabled: boolean;
  thingsAuthenticationToken: string;
  quickEntryShortcutEnabled: boolean;
  quickEntryShortcutKeybind: string;
  quickEntryWithAutofillShortcutEnabled: boolean;
  quickEntryWithAutofillShortcutKeybind: string;
  quickEntrySaveLocation: 'inbox' | 'today';
}

export interface Area {
  id: string;
  title: string;
  projects: Project[],
  todos: Todo[];
}

export type ProjectLocation = 'root' | { area: string };
export interface Project {
  id: string;
  title: string;
  notes: string;
  headings: Heading[];
  todos: Todo[];
}

export type HeadingLocation = { project: string };
export interface Heading {
  id: string;
  title: string;
  todos: Todo[];
}

export type TodoLocation = 'inbox' | 'trash' | { area: string } | { project: string } | { heading: string };
export interface Todo {
  id: string;
  completed: boolean;
  title: string;
  notes: string;
  when: 'today' | 'this evening' | 'someday' | Date;
  deadline: 'today' | 'this evening' | 'someday' | Date;
  checklist: { id: string; completed: boolean; title: string; }[];
  tags: Tag[];
  completionDate?: Date;
}

export interface Tag {
  id: string;
  name: string;
}

