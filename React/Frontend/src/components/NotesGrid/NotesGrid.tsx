import { Button, Container, Grid, Typography } from '@mui/material';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useInjection } from '../../ioc/ioc.react';
import ownTypes from '../../ioc/ownTypes';
import { NotesGridStore } from '../../stores/components';
import NoteCard from '../NoteCard';

const NotesGrid = observer(() => {
    const store = useInjection<NotesGridStore>(ownTypes.notesGridStore);
    const { t } = useTranslation(['note'])

    useEffect(() => {
        const getNotes = async () => {
            await store.init();
        }
        getNotes();
    }, [store.notes.length, store]);
    
    return (
        <Container>
            <Grid container spacing={3}>
                { store.notes?.map((note, key) => (
                    <Grid item key={key} lg={4} md={6} xs={12}>
                        <NoteCard
                            key={key}
                            note={note}
                        />
                    </Grid>
                ))}
                <Grid item lg={4} md={6} xs={12}>
                    <Button className='add-note-button' onClick={() => store.create(t('text'), t('title'))} fullWidth>
                        <Typography className='add-note-button-text' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300 }}>
                            +
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
})

export default NotesGrid;