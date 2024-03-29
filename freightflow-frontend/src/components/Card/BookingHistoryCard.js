
import React from "react";
import { Card, Button } from "@material-tailwind/react";

export function CardDefault({
  bookingid,
  shipmentCountry,
  destinationCountry,
  bookingDate,
  aboutProduct,
  onDelete,
}) {
  return (
    <>
      <Card className="mt-6 w-full">
        <div className="ml-8 p-2">
          <div className="flex flex-row gap-x-40">
            <div>{bookingid}</div>
            <div>{shipmentCountry}</div>
            <div className="ml-[5%]">{destinationCountry}</div>
            <div className="ml-[3%]">{bookingDate}</div>
            <div className="">{aboutProduct}</div>
          </div>
          <div className="ml-[90%] -mt-6">
            <Button onClick={() => onDelete(bookingid)} className="bg-red-600">
              Delete
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
}
