export const categories = [
    {"label": "Paint", "value": "paint"},
    {"label": "Hardware", "value": "hardware"},
    {"label": "Sanitory", "value": "sanitory"},
];

export const getCategoryTypeColor = (type) => {
    switch (type) {
        case "paint":
            return "#F36E4C";
        case "hardware":
            return "#C8B384";
        case "sanitory":
            return "#193C63";
        default:
            return "white";
    }
};