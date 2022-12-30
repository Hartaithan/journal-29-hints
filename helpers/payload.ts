interface IPayloadObject {
  [key: string]: never;
}

export const validatePayload = (payload: IPayloadObject) => {
  const results = [];
  for (const key in payload) {
    const value = payload[key] as string;
    if (!value || value.toString().trim().length === 0) {
      results.push(key + " is empty");
    }
  }
  return results;
};
