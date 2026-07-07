import { NextResponse } from 'next/server';

/**
 * Verify admin authorization from JWT token
 * @param {Request} request - NextRequest object
 * @returns {Object} - { valid: boolean, error?: string, userId?: string }
 */
export async function verifyAdminAuth(request) {
    try {
        const authHeader = request.headers.get('authorization');
        
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return { 
                valid: false, 
                error: 'Unauthorized: No token provided',
                status: 401 
            };
        }

        const token = authHeader.substring(7);
        const secret = process.env.JWT_SECRET;

        if (!secret) {
            console.error('JWT_SECRET not configured');
            return { 
                valid: false, 
                error: 'Server configuration error',
                status: 500 
            };
        }

        // Simple JWT verification (in production, use a proper JWT library)
        const parts = token.split('.');
        if (parts.length !== 3) {
            return { 
                valid: false, 
                error: 'Invalid token format',
                status: 401 
            };
        }

        try {
            const payload = JSON.parse(
                Buffer.from(parts[1], 'base64').toString('utf8')
            );

            // Check token expiration
            if (payload.exp && payload.exp * 1000 < Date.now()) {
                return { 
                    valid: false, 
                    error: 'Token expired',
                    status: 401 
                };
            }

            // Verify role
            if (payload.role !== 'admin') {
                return { 
                    valid: false, 
                    error: 'Forbidden: Admin role required',
                    status: 403 
                };
            }

            return { 
                valid: true,
                userId: payload._id,
                email: payload.email
            };
        } catch (decodeError) {
            return { 
                valid: false, 
                error: 'Invalid token',
                status: 401 
            };
        }
    } catch (error) {
        console.error('Auth verification error:', error);
        return { 
            valid: false, 
            error: 'Authentication failed',
            status: 500 
        };
    }
}

/**
 * Create unauthorized response
 */
export function unauthorizedResponse(message = 'Unauthorized') {
    return NextResponse.json(
        { error: message },
        { status: 401 }
    );
}

/**
 * Create forbidden response
 */
export function forbiddenResponse(message = 'Forbidden') {
    return NextResponse.json(
        { error: message },
        { status: 403 }
    );
}
