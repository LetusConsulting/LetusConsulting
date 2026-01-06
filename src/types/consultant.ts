export interface Project {
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
}


export type Consultant = {
  id: number;
  name: string;
    // image: string;
  title: string;
  description: string;
  avatar: string;
  verified?: boolean;
  skills: { name: string; icon: string }[];
  projects: { title: string; description: string }[];
  metrics: { [key: string]: string }; // <-- required
};
