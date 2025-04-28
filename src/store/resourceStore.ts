// import {create} from 'zustand';
// import { Resource } from '../types/resource';
// import { supabase } from '@/lib/supabase';

// type ResourceStore ={
//     resources : Resource[];
//     fetchResources: () => Promise<void>;
//     fetchResourceById: (id: string) => Promise<Resource | undefined>;
//     addResources: (resource: Omit<Resource, 'id'>) => Promise<void>;
//     updateResource: (id: string, updatedFields: Partial<Resource>) => Promise<void>;
//     deleteResource: (id: string) => Promise<void>;

// }

// export const useResourceStore = create<ResourceStore>((set, get) => ({
//     resources: [],
//     fetchResources: async () => {
//         const {data, error} = await supabase
//         .from('resources')
//         .select("*, activities(*)")
//         .order('date', { ascending: false });
//         if (error) {
//             console.error('Error fetching resources:', error);
//             return;
//         }
//         set({ resources: data });
//     },
//     fetchResourceById: async (id) => {
//         const { data, error } = await supabase
//             .from('resources')
//             .select("*, activities(*)")
//             .eq('id', id)
//             .single();
//         if (error) {
//             console.error('Error fetching resource:', error);
//             return undefined;
//         }
//         return data as Resource;
//     },
//     addResources: async (resource) => {
//         const { activities = [], ...resourceData } = resource;
//         const { data, error } = await supabase
//             .from('resources')
//             .insert([resourceData])
//             .select()
//             .single();
//         if (error) {
//             console.error('Error adding resource:', error);
//             return;
//         }
//         const resourceId = data.id;

//         if (activities.length > 0) {
//             const activityData = activities.map((act) => ({
//                 ...act,
//                 resource_id: resourceId
//             }))
//         const {error: activityError} = await supabase
//         .from('activities')
//         .insert(activityData);

//         if (activityError) {
//             console.error('Error adding activities:', activityError);
//         }}
//         get().fetchResources();
//     },
//     updateResource: async (id, updatedResource) => {
//         const {activities= [], ...resourceData} = updatedResource;
//         const {error} = await supabase
//         .from('resources')
//         .update(resourceData)
//         .eq('id', id);

//         if (error) {
//             console.error('Error updating resource:', error);
//             return;
//         }

//         await supabase,from('activities ')
//     },
//     deleteResource: async (id) => {},

// }))
