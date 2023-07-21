import { checkingCredentials } from "../../../store/auth";
import { checkingAuthentication } from "../../../store/auth/thunks";

jest.mock("../../../firebase/providers");

describe("pruebas en thunks.js de auth", () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());
  test("debe de invocar el checking credentials", async () => {
    await checkingAuthentication()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });
});
