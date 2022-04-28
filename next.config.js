/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NBA_API_BASE_URL: "https://api-nba-v1.p.rapidapi.com",
    RAPID_API_HOST: "api-nba-v1.p.rapidapi.com",
    RAPID_API_KEY: "4cec6170bcmsh5d6a0ea78315a5ep10f15cjsn59ef0231e8e4",
    TWITTER_CONSUMER_KEY: "eB3sC2K9NHRI52ur4cl54OSB4",
    TWITTER_CONSUMER_KEY_SECRET:
      "A1RN16vb9N0h1ZetmzuTRQnfHPJJgMiQStPERa1MXGMsk1Z8AZ",
    TWITTER_ACCESS_TOKEN: "1063153011759988737-eZe9JbRvNq2hTeUTRTitXAykA0OJol",
    TWITTER_ACCESS_TOKEN_SECRET:
      "DAwq4Lqo2UWLZuYMPfaB50YtYj6mLMFgQkoVGulQ9JJoY",
    TWITTER_BEARER_TOKEN:
      "AAAAAAAAAAAAAAAAAAAAAC0ubQEAAAAALw3J0DpWPxJ25edX2TvK9J2r8SM%3DOslFyE5srJ16rAt6wB8dZiSyAWNDlhQ4IlKz7uEGDDpYkdXAUI",
    TEST_TWITTER_HANDLE: "Alex_Villly",
  },
};

module.exports = nextConfig;
