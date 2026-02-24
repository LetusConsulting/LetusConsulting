export interface Project {
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
}


// export type Consultant = {
//   id: number;
//   name: string;
//     // image: string;
//   title: string;
//   description: string;
//   avatar: string;
//   verified?: boolean;
//   skills: { name: string; icon: string }[];
//   projects: { title: string; description: string }[];
//   metrics: { [key: string]: string }; // <-- required
// };


export interface Consultant {
   id: number;
  name: string;
  title: string;
  avatar: string;
  verified?: boolean;
  description: string;

  metrics?: Record<string, string | number>;
  skills?: {
    name: string;
    icon: string;
  }[];

  profileLinks?: {
    label: string;
    url: string;
  }[];
}
