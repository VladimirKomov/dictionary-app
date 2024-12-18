interface Meaning {
    partOfSpeech: string;
    definitions: {
        definition: string;
        example?: string;
    }[];
    synonyms: string[];
    antonyms: string[];
}


interface ResponseDto {
    word: string;
    phonetic: string;
    audioUrls: string[];
    meanings: Meaning[];
    sourceUrl: string;
}

export const mapResApiToDto = (resApi: Array<any>): ResponseDto | null => {
    if (resApi.length === 0) {
        return null;
    }

    const first = resApi[0];

    const audioUrls = first.phonetics
        ?.filter((phonetic: any) => phonetic.audio && phonetic.audio.includes("-us.mp3"))
        .map((phonetic: any) => phonetic.audio) || [];

    const meanings: Meaning[] = first.meanings?.map((meaning: any) => ({
        partOfSpeech: meaning.partOfSpeech || "Unknown",
        definitions: meaning.definitions?.map((def: any) => ({
            definition: def.definition || "",
            example: def.example || "",
        })) || [],
        synonyms: meaning.synonyms || [],
        antonyms: meaning.antonyms || [],
    })) || [];

    return {
        word: first.word,
        phonetic: first.phonetic,
        audioUrls: audioUrls,
        meanings: meanings,
        sourceUrl: first.sourceUrls?.[0] || "",
    };
};