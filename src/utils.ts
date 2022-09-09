import { Area, Project, Heading, Todo } from "./models";

export function getAreaTodos(area: Area): Todo[] {
  return [
    ...area.items,
    ...area.projects.map((p: Project) => getProjectTodos(p)).flat(),
  ];
}

export function getProjectTodos(project: Project): Todo[] {
  return [
    ...project.items,
    ...project.headings.map((h: Heading) => h.items).flat(),
  ];
}

