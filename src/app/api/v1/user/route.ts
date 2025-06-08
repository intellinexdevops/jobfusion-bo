import dbConnection from "@/lib/database/main";
import User from "@/app/(backend)/models/User";

export async function GET(request: Request) {
  await dbConnection();

  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") ?? "1") || 1;
    const limit = parseInt(searchParams.get("limit") ?? "10") || 10;
    // const category = searchParams.get('category');

    const skip = (page - 1) * limit;

    // Build query
    const query = {};
    // if (category) query.category = category;

    const [user, total] = await Promise.all([
      User.find(query)
        .select("username email phone ip_address url token created_at")
        .sort({ created_at: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      User.countDocuments(query),
    ]);
    return new Response(
      JSON.stringify({
        data: user,
        total,
        page,
        totalPages: Math.ceil(total / limit),
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
