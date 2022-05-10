export type Component = {
  [name: string]: {
    use: number;
    capacity: string;
  };
};

export type Server = {
  ip: string;
  name: string;
  components: Component;
}[];
