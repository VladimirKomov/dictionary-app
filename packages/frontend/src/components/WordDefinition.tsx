import React from 'react';

interface WordDefinitionProps {
    word: string;
    results: any;
}

const WordDefinition: React.FC<WordDefinitionProps> = ({ word, results }) => {
    return (
        <div>
            <h3>Result from "{word}"</h3>
            {
                results ?
                <pre>{JSON.stringify(results, null, 2)}</pre> :
                <p>No results found</p>
            }
        </div>
    )
};

export default WordDefinition;