export interface Markable {
    location: {
        latitude: number;
        longitude: number;
    };
    showContent(): string;
}