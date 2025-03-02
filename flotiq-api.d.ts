/**
 * This file was generated by flotiq-api-typegen command
 * Generated at: 2025-01-30T15:41:33.928Z
 */

import {
  DataLink,
  ApiRequest,
  BaseObject,
  SearchParams,
  HydratedSearchResponse,
  InternalMedia,
  InternalMediaHydrated,
  InternalMediaHydratedTwice,
  InternalPluginSettings,
  InternalPluginSettingsHydrated,
  InternalPluginSettingsHydratedTwice,
  InternalTag,
  InternalTagHydrated,
  InternalTagHydratedTwice,
  InternalWebhooks,
  InternalWebhooksHydrated,
  InternalWebhooksHydratedTwice,
} from "@flotiq/flotiq-api-sdk";

type StringWithAutocomplete<T> = T | (string & Record<never, never>);

declare module "@flotiq/flotiq-api-sdk" {
  export type AnySpaceCTD =
    | InternalMedia
    | InternalPluginSettings
    | InternalTag
    | InternalWebhooks
    | Blogpost;

  export type AnySpaceCTDHydrated =
    | InternalMediaHydrated
    | InternalPluginSettingsHydrated
    | InternalTagHydrated
    | InternalWebhooksHydrated
    | BlogpostHydrated;

  export type AnySpaceCTDHydratedTwice =
    | InternalMediaHydratedTwice
    | InternalPluginSettingsHydratedTwice
    | InternalTagHydratedTwice
    | InternalWebhooksHydratedTwice
    | BlogpostHydratedTwice;

  // #region blogpost

  export interface BlogpostBase extends BaseObject<"blogpost"> {
    title: string;

    /**
     * Slug can only have alphanumerical characters, - and _
     */
    slug: string;
    excerpt: string;
    content: string;
    headerImage?:
      | Array<DataLink>
      | Array<InternalMedia>
      | Array<InternalMediaHydrated>
      | Array<InternalMediaHydratedTwice>;
  }

  export interface Blogpost extends BlogpostBase {
    headerImage?: Array<DataLink>;
  }

  export interface BlogpostHydrated extends BlogpostBase {
    headerImage?: Array<InternalMedia>;
  }

  export interface BlogpostHydratedTwice extends BlogpostBase {
    headerImage?: Array<InternalMediaHydrated>;
  }

  export namespace Blogpost {
    export type FilterableFields = StringWithAutocomplete<
      | "title"
      | "slug"
      | "excerpt"
      | "content"
      | "headerImage"
      | "headerImage[*].type"
      | "headerImage[*].dataUrl"
    >;
  }

  // #endregion

  export interface FlotiqObjectAPI {
    _media: ApiRequest<
      InternalMedia,
      InternalMediaHydrated,
      InternalMediaHydratedTwice,
      InternalMedia.FilterableFields
    >;

    _plugin_settings: ApiRequest<
      InternalPluginSettings,
      InternalPluginSettingsHydrated,
      InternalPluginSettingsHydratedTwice,
      InternalPluginSettings.FilterableFields
    >;

    _tag: ApiRequest<
      InternalTag,
      InternalTagHydrated,
      InternalTagHydratedTwice,
      InternalTag.FilterableFields
    >;

    _webhooks: ApiRequest<
      InternalWebhooks,
      InternalWebhooksHydrated,
      InternalWebhooksHydratedTwice,
      InternalWebhooks.FilterableFields
    >;

    blogpost: ApiRequest<
      Blogpost,
      BlogpostHydrated,
      BlogpostHydratedTwice,
      Blogpost.FilterableFields
    >;
  }

  export interface FlotiqSearchAPI {
    query<P extends SearchParams>(
      params?: P,
    ): Promise<
      HydratedSearchResponse<
        P,
        AnySpaceCTD,
        AnySpaceCTDHydrated,
        AnySpaceCTDHydratedTwice
      >
    >;
  }
}
