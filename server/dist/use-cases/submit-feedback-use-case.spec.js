"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const submit_feedback_use_case_1 = require("./submit-feedback-use-case");
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();
const submitFeedback = new submit_feedback_use_case_1.SubmitFeedbackUseCase({ create: createFeedbackSpy }, { sendMail: sendMailSpy });
describe('Submit feedback', () => {
    it('Should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example of comment',
            screenshot: 'data:image/png;base64kfsjfbslfbasçcnakcsnac',
        })).resolves.not.toThrow();
        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });
    it('Should not be able to submit a feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example of comment',
            screenshot: 'data:image/png;base64kfsjfbslfbasçcnakcsnac',
        })).rejects.toThrow();
    });
    it('Should not be able to submit a feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type: 'OTHER',
            comment: '',
            screenshot: 'data:image/png;base64kfsjfbslfbasçcnakcsnac',
        })).rejects.toThrow();
    });
    it('Should not be able to submit a feedback with an invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type: 'OTHER',
            comment: 'example of comment',
            screenshot: 'test.png',
        })).rejects.toThrow();
    });
});
