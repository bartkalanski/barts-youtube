import mockAxios from "axios";
import youtube from "../api/youtube";

describe("when calling the get method", () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    mockAxios.mockClear();
  });
  it("calls the API GET method", () => {
    expect(mockAxios.get).toHaveBeenCalledTimes(0);
    youtube.get("/testurl", {}, undefined, undefined);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});
