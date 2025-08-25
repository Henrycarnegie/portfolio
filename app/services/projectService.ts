export const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/projects`;

export const fetchProjects = async () => {
   const res = await fetch(BASE_URL);
   if (!res.ok) throw new Error("Failed to fetch projects");
   return res.json();
};

export const createProject = async (project: {
   name: string;
   description: string;
}) => {
   const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project),
   });
   if (!res.ok) throw new Error("Failed to create project");
   return res.json();
};

export const updateProject = async (
   id: number,
   project: { name: string; description: string }
) => {
   const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project),
   });
   if (!res.ok) throw new Error("Failed to update project");
   return res.json();
};

export const deleteProject = async (id: number) => {
   const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
   });
   if (!res.ok) throw new Error("Failed to delete project");
   return res.json();
};
