export type ID = string | number;

export interface Config {
  apiKey: string;
  retries: number;
}

export const fetchData = async (url: string): Promise<void> => {
  const config: Config = {
    apiKey: "SECRET_KEY",
    retries: 3
  };
  
  console.log(`Fetching from ${url} with key ${config.apiKey}`);
};