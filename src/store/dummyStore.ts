import { Resource } from "@/types/resource";
import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

type ResourceStore = {
  resources: Resource[];
  fetchResources: () => Promise<void>;
  addResource: (resource: Omit<Resource, "id">) => Promise<void>;
  updateResource: (
    id: string,
    updatedFields: Partial<Resource>
  ) => Promise<void>;
  deleteResource: (id: string) => Promise<void>;
};

export const resourceStore = create<ResourceStore>((set) => ({
  resources: [],
  fetchResources: async () => {
    try {
      const resp = await fetch("/src/data/full_resources.json");
      const data: Resource[] = await resp.json();
      set({ resources: data });
    } catch (error) {
      console.error("Error fetching resources:", error);
    }
  },
  addResource: async (resource) =>
    set((state) => ({
      resources: [...state.resources, { ...resource, id: uuidv4() }],
    })),
  updateResource: async (id, updatedFields) =>
    set((state) => ({
      resources: state.resources.map((resource) =>
        resource.id === id ? { ...resource, ...updatedFields } : resource
      ),
    })),
  deleteResource: async (id) => {
    set((state) => ({
      resources: state.resources.filter((resource) => resource.id !== id),
    }));
  },
}));
