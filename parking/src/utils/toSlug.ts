import removeAccents=require('remove-accents');

export function toSlug(chaine: string): string {
    chaine = chaine.toLowerCase(); // Réassigner la chaîne
    chaine = chaine.trim(); // Réassigner la chaîne
    chaine = removeAccents(chaine);
    chaine = chaine.replaceAll(/[""]/g, "-");
    return chaine; // Retourner la chaîne modifiée
}

