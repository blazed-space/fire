
/**
 * This interface defines the config options for a Fire site.
 * @interface
 * @prop name Site name
 * @prop twitter Site Twitter handle    [optional]
 * @prop fbAppId Site Facebook app id   [optional]
 * @prop company Company name           [optional]
 * @prop description Site description   [optional]
 */
export interface Config {
    name: string;
    twitter?: string;
    fbAppId?: string;
    company?: string;
    description?: string;
}

