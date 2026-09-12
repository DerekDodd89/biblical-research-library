"use client";

import SermonRow from "./SermonRow";

export default function ResultsTable() {
  return (
    <div className="overflow-x-auto">

      <table className="min-w-full">

        <tbody>

          <SermonRow
            favorite
            id="S000421"
            title="The Direction of Worship"
            speaker="Derek Dodd"
            series="Worship Series"
            scripture="John 4:23-24"
            date="03/15/2018"
            length="30 min"
            type="Expository"
            status="Published"
            source="Legacy Import"
          />

          <SermonRow
            id="S000422"
            title="Jesus' Memorial Service"
            speaker="Derek Dodd"
            series="Communion"
            scripture="Luke 22:19-20"
            date="06/02/2024"
            length="30 min"
            type="Topical"
            status="Published"
            source="BRL Original"
          />

          <SermonRow
            favorite
            id="S000423"
            title="Do You Know God?"
            speaker="Derek Dodd"
            series="Gospel Meetings"
            scripture="Jeremiah 9:23-24"
            date="04/10/2016"
            length="40 min"
            type="Topical"
            status="Published"
            source="Legacy Import"
          />

        </tbody>

      </table>

    </div>
  );
}