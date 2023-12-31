"""empty message

Revision ID: 1b65fdc05e3a
Revises: 5d99d6202ea5
Create Date: 2023-07-04 15:01:08.238659

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1b65fdc05e3a'
down_revision = '5d99d6202ea5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('journal_prompts', schema=None) as batch_op:
        batch_op.add_column(sa.Column('completed_at', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True))

    with op.batch_alter_table('nudge_prompts', schema=None) as batch_op:
        batch_op.add_column(sa.Column('completed_at', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('nudge_prompts', schema=None) as batch_op:
        batch_op.drop_column('completed_at')

    with op.batch_alter_table('journal_prompts', schema=None) as batch_op:
        batch_op.drop_column('completed_at')

    # ### end Alembic commands ###
