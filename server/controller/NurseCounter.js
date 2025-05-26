const prisma = require("../prisma/prisma")

exports.create = async (req, res) => {
  try {
    const {
      userId,
      patientType,
      weight, height, waist, bmi, ofc, bsa, spo2, anc, fbs,
      vs1_t, vs1_pr, vs1_rr, vs1_bp, vs1_pain_score, vs1_adl,
      vs2_t, vs2_pr, vs2_rr, vs2_bp, vs2_pain_score, vs2_iadl, vs2_mmse,
      visitType,
      currentSymptoms, currentTreatment,
      pastIllnesses, otherPastIllness
    } = req.body;

    const record = await prisma.nurseRecord.create({
      data: {
        userId,
        patientType,
        weight, height, waist, bmi, ofc, bsa, spo2, anc, fbs,
        vs1_t, vs1_pr, vs1_rr, vs1_bp, vs1_pain_score, vs1_adl,
        vs2_t, vs2_pr, vs2_rr, vs2_bp, vs2_pain_score, vs2_iadl, vs2_mmse,
        visitType,
        currentSymptoms, currentTreatment,
        pastIllnesses, otherPastIllness,
      },
    });
    res.json(record);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create nurse record' });
  }
};

// Get all Nurse Records by user
exports.getUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const records = await prisma.nurseRecord.findMany({
      where: { userId: parseInt(userId) },
      orderBy: { createdAt: 'desc' }
    });
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch nurse records' });
  }
};