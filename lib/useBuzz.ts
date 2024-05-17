"use server";

const API = `http://${process.env.NEXT_PUBLIC_BACKEND}`;

export const fetchBuzzes = async (): Promise<Buzz[]> => {
  const res = await fetch(`${API}/api/buzz`, {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch buzzes");
  }

  return res.json();
};

export const createBuzz = async (content: string, author: string) => {
  const response = await fetch(
    `http://${process.env.NEXT_PUBLIC_BACKEND}/api/buzz`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content, author }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create buzz");
  }
};

export const deleteBuzz = async (id: string) => {
  try {
    const res = await fetch(`${API}/api/buzz/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete buzz");
    }

    return true;
  } catch (error) {
    console.error("Error deleting buzz:", error);
    return false;
  }
};

export const editBuzz = async (id: string) => {
  try {
    const res = await fetch(`${API}/api/buzz/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to edit buzz");
    }
    return true;
  } catch (error) {
    console.error("Error editing buzz:", error);
    return false;
  }
};
