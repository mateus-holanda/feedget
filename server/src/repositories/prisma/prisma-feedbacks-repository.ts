import { prisma } from '../../prisma';
import { FeedbackCreateData, FeedbacksRepository } from '../feeedbacks-repository';

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    });
  }
}