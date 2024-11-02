// types.ts

// Interface for a Person
export interface Person {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
  }
  
  // Interface for a Film
  export interface Film {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
  }
  
  // Interface for a Vehicle
  export interface Vehicle {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    vehicle_class: string;
  }
  
  // Interface for a Starship
  export interface Starship {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
  }
  
  // Interface for a Planet
  export interface Planet {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
  }
  
  // Interface for a Species
  export interface Species {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    homeworld: string;
    language: string;
  }
  
  // Interface for the EntityState
  export interface EntityState {
    people: Person[];
    films: Film[];
    vehicles: Vehicle[];
    starships: Starship[];
    planets: Planet[];
    species: Species[];
    loading: boolean;
    error: string | null;
  }
  
  // Interface for the AuthState
  export interface AuthState {
    isAuthenticated: boolean;
  }