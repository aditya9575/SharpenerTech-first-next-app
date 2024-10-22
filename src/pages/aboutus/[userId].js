import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const DynamicContent = () => {
    const router = useRouter();
    const [developer, setDeveloper] = useState(null);
    
    const details = [
        { id: 1, name: 'Yash', role: 'Senior Developer' },
        { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
        { id: 3, name: 'Suresh', role: 'Frontend Developer' },
    ];

    useEffect(() => {
        if (router.query.userId) {
            const slugid = parseInt(router.query.userId);
            const foundDeveloper = details.find(item => item.id === slugid);

            if (foundDeveloper) {
                setDeveloper(foundDeveloper);
            } else {
                setDeveloper({ name: 'Developer does not exist', role: '' });
            }
        }
    }, [router.query.userId]);

    if (!developer) {
        return <p>Loading...</p>;  // Show loading message while waiting for the slugid to be available
    }

    return (
        <div>
            <p>{developer.name} {developer.role}</p>
        </div>
    );
};

export default DynamicContent;
