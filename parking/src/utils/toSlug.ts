import removeAccents=require('remove-accents');

export function toSlug(chaine: string): string {
    chaine = chaine.toLowerCase();
    chaine = chaine.trim();
    chaine = removeAccents(chaine);// retirer les accents
    chaine = chaine.replace(/\s+/g, '-');
    chaine= chaine.replace(/'/g, '-');
    return chaine; // Retourner la chaîne modifiée
}

