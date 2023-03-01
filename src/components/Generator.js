import React from "react";
import { useState } from "react";

function Generator({ setOutput, setParagraphs, setCopied }) {
  const [length, setLength] = useState(15);
  const words = ["Taylor", "Swift", "Speak Now", "Fearless", "Red", "1989", "reputation", "Lover", "folklore", "evermore", "Midnights", "(Taylor's Version)", "[From the Vault]", "Alison", "Taylah", "Nashville", "Joe", "Marjorie", "Shake it Off", "Jack Antonoff", "Willow", "Cardigan", "Anti-Hero", "Eras Tour", "All Too Well", "re-record", "snake", "Grammy", "album of the year", "the 1", "13", "easter egg", "songwriter", "signer", "guitar", "piano", "promo", "debut", "solo", "co-writer", "producer", "cats", "Cats", "label", "Tim McGraw", "Our Song", "farm", "Max Martin", "Blank Space", "style", "squad", "stadium", "tour", "London", "New York", "private jet", "album", "single", "song", "masters", "back catalogue", "surprise", "Haim", "Selena Gomez", "Grammy", "betty", "exile", "(10 Minute Version)", "record", "vinyl", "CD", "casette", "clock", "pop", "rock", "country", "indie", "folk", "fame", "twang", "mezzo-soprano", "soft", "vocalist", "critics", "fans", "blondie", "red lipstick", "quill", "fountain pen", "glitter gel pen", "no, it's becky", "director", "businesswoman", "Long Pong Sessions", "artist", "Aaron Dressner", "deluxe", "bonus", "the last great american dynasty", "my tears ricochet", "remix", "Elvira", "James", "august", "vocals", "cottagecore", "music video", "rollout", "era", "Target Exclusive", "queue", "presale", "Midnight Rain", "Woulda Shoulda Coulda", "merch", "i had a marvelous time ruining everything", "tracklist", "song", "sexy baby", "lyrics", "tour film", "snow on the beach", "fuck the patriarchy", "Delicate", "you need to calm down", "22", "I knew you were trouble", "live", "stained glass windows in my mind", "3am", "here's how Cruel Summer can still be a single", "Lover Fest", "I swear I don't love the drama, it loves me", "refrigerator light", "I kept you like an oath", "karma is a cat", "stadium", "Hot 100", "swiftie", "masters"];

  function generateWords() {
    let newArray = [];
    for (let i = 0; i < length; i++) {
      newArray = [...newArray, words[Math.floor(Math.random() * words.length)]];
      
    }
    setOutput(newArray);
    setCopied(false);
  }

  return (
    <>
      <div className="options-container">
        <select
          name="length"
          id="length"
          onChange={(e) => setLength(e.target.value)}
        >
          <option value="15">15 words</option>
          <option value="30">30 words</option>
          <option value="90">90 words</option>
          <option value="300">300 words</option>
        </select>

        <div>
          <input
            type="checkbox"
            id="paragraph"
            name="paragraph"
            value="paragraph"
            onChange={(e) => setParagraphs(e.target.checked)}
          />
          <label htmlFor="paragraph">Paragraphs</label>
        </div>
      </div>

      <div className="generate-button-container">
        <button className="generate-button" onClick={generateWords}>
          Generate
        </button>
      </div>
    </>
  );
}

export default Generator;
