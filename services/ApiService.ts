export class ApiService {
  async get<T>(url: string): Promise<T> {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data: T = await response.json();
      return data;
    } catch (error) {
      console.error("API call failed:", error);
      throw error;
    }
  }
}