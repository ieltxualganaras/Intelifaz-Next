import { ApolloState } from '@/modules/core/apollo/apolloClient';

/**
 * Page properties available on all pages, whether they're rendered statically, dynamically, from the server or the client
 *
 * Multiversal page props are listed in MultiversalPageProps
 * Server-side page props are listed in SSRPageProps
 * Client-side page props are listed in SSGPageProps
 */
export type MultiversalPageProps<E extends {} = {}> = {
  bestCountryCodes: string[];
  serializedDataset: string; // Transferred from server to browser as JSON (using Flatten.stringify), then parsed on the browser/server within the MultiversalAppBootstrap
  customerRef: string;
  error?: Error; // Only defined if there was an error
  gcmsLocales: string;
  hasLocaleFromUrl: boolean;
  isReadyToRender: boolean;
  lang: string;
  locale: string;
  statusCode?: number; // Provided by Next.js framework, sometimes
} & ApolloState & E;
