import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Service from "@/models/Service";
import { SERVICES_DATA } from "@/lib/servicesData";

export async function GET() {
    try {
        await dbConnect();

        // Iterate over the static data and update/insert into DB
        for (const service of SERVICES_DATA) {
            // Upsert: Update if exists, Insert if not
            await Service.findOneAndUpdate(
                { slug: service.slug }, // Filter
                service,                // Data to update
                { upsert: true, new: true, setDefaultsOnInsert: true }
            );
        }

        return NextResponse.json({
            success: true,
            message: `Successfully seeded ${SERVICES_DATA.length} services.`,
            seededServices: SERVICES_DATA.map(s => s.slug)
        });
    } catch (error) {
        console.error("Seeding Error:", error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
