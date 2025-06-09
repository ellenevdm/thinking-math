import { resourceCards } from "@/data/dummyResources";
import { Category, Resource } from "@/types/resource";
import { create } from "zustand";
function getInitialCategories(resources: Resource[]): Category[] {
  const unique: { [key: string]: Category } = {};
  resources.forEach((r) => {
    if (!unique[r.categoryId]) {
      unique[r.categoryId] = { id: r.categoryId, name: r.category };
    }
  });
  return Object.values(unique);
}

interface ResourceStore {
  resources: Resource[];
  categories: Category[];
  addResource: (resource: Resource) => void;
  deleteResource: (id: string) => void;
  updateResource: (updated: Resource) => void;
  deleteComment: (resourceId: string, commentId: string) => void;
}

export const useResourceStore = create<ResourceStore>((set, get) => ({
  resources: resourceCards.map((r) => ({
    ...r,
    activities:
      r.activities?.map((a: any) => ({
        id: a.actId,
        name: a.actName,
        link: a.actLink,
      })) ?? [],
  })),
  categories: getInitialCategories(
    resourceCards.map((r) => ({
      ...r,
      activities:
        r.activities?.map((a: any) => ({
          id: a.actId,
          name: a.actName,
          link: a.actLink,
        })) ?? [],
    }))
  ),
  addResource: (resource) => {
    set((state) => ({
      resources: [...state.resources, resource],
    }));
    if (!get().categories.some((cat) => cat.id === resource.categoryId)) {
      set((state) => ({
        categories: [
          ...state.categories,
          { id: resource.categoryId, name: resource.category },
        ],
      }));
    }
  },
  deleteResource: (id) =>
    set((state) => ({ resources: state.resources.filter((r) => r.id !== id) })),
  updateResource: (updated: Resource) => {
    set((state) => ({
      resources: state.resources.map((r) =>
        r.id === updated.id ? updated : r
      ),
    }));
  },
  deleteComment: (resourceId: string, commentId: string) => {
    set((state) => ({
      resources: state.resources.map((r) => {
        return r.id === resourceId
          ? { ...r, comments: r.comments?.filter((c) => c.id !== commentId) }
          : r;
      }),
    }));
  },
}));
