import { Type } from '@sinclair/typebox';
import { type FastifyReply, type FastifyRequest } from 'fastify';

import { type Route } from './route.js';
import { HttpMethod } from './http/httpMethod.js';
import { type HttpRouteSchema } from './http/httpRouteSchema.js';
import { HttpStatusCode } from './http/httpStatusCode.js';

export class HealthRoute implements Route {
  public readonly description = 'Checks application health';
  public readonly method = HttpMethod.get;
  public readonly url = '/health';
  public readonly schema: HttpRouteSchema = {
    response: {
      [HttpStatusCode.ok]: {
        description: 'Application is healthy',
        ...Type.Object({
          healthy: Type.Boolean(),
        }),
      },
    },
  };

  // eslint-disable-next-line @typescript-eslint/naming-convention
  public async handler(_request: FastifyRequest, reply: FastifyReply): Promise<void> {
    reply.status(HttpStatusCode.ok).send({ healthy: true });
  }
}
