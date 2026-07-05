import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
        }

        console.log('✅ New subscriber:', email);
        console.log('📧 Forward this to: info@hoppico.in');

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Subscribe error:', err);
        return NextResponse.json({ error: 'Failed to process subscription' }, { status: 500 });
    }
}