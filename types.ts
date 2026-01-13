
export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  year: string;
  title: string;
  description: string;
}
