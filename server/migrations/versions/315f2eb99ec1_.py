"""empty message

Revision ID: 315f2eb99ec1
Revises: 
Create Date: 2023-07-04 14:40:48.163728

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '315f2eb99ec1'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('pillars',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('image', sa.String(), nullable=True),
    sa.Column('pillar_name', sa.String(), nullable=True),
    sa.Column('description', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('recommendations',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('rec_type', sa.String(), nullable=True),
    sa.Column('rec_link', sa.String(), nullable=True),
    sa.Column('image', sa.String(), nullable=True),
    sa.Column('blurb', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('email', sa.String(), nullable=True),
    sa.Column('username', sa.String(), nullable=True),
    sa.Column('_password_hash', sa.String(), nullable=True),
    sa.Column('image', sa.String(), nullable=True),
    sa.Column('bio', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('journals',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('image', sa.String(), nullable=True),
    sa.Column('action_type', sa.String(), nullable=True),
    sa.Column('description', sa.String(), nullable=True),
    sa.Column('pillar_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['pillar_id'], ['pillars.id'], name=op.f('fk_journals_pillar_id_pillars')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('nudges',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('image', sa.String(), nullable=True),
    sa.Column('action_type', sa.String(), nullable=True),
    sa.Column('description', sa.String(), nullable=True),
    sa.Column('pillar_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['pillar_id'], ['pillars.id'], name=op.f('fk_nudges_pillar_id_pillars')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('journal_prompts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('action_prompt', sa.String(), nullable=True),
    sa.Column('journals_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['journals_id'], ['journals.id'], name=op.f('fk_journal_prompts_journals_id_journals')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('nudge_prompts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('action_prompt', sa.String(), nullable=True),
    sa.Column('nudges_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['nudges_id'], ['nudges.id'], name=op.f('fk_nudge_prompts_nudges_id_nudges')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('completed_prompts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('completed_at', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('nudge_prompt_id', sa.Integer(), nullable=True),
    sa.Column('journal_prompt_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['journal_prompt_id'], ['journal_prompts.id'], name=op.f('fk_completed_prompts_journal_prompt_id_journal_prompts')),
    sa.ForeignKeyConstraint(['nudge_prompt_id'], ['nudge_prompts.id'], name=op.f('fk_completed_prompts_nudge_prompt_id_nudge_prompts')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_completed_prompts_user_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('completed_prompts')
    op.drop_table('nudge_prompts')
    op.drop_table('journal_prompts')
    op.drop_table('nudges')
    op.drop_table('journals')
    op.drop_table('users')
    op.drop_table('recommendations')
    op.drop_table('pillars')
    # ### end Alembic commands ###