import request from "supertest";
import app from "../src/app"; // Adjust the import path as needed

describe("GET /api/todos", () => {
  test("should return todos associated with the authenticated user", async () => {
    const response = await request(app).get("/api/todos").expect(200);

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty("title");
    expect(response.body[0]).toHaveProperty("id");
  });
});
