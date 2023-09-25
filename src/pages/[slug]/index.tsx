import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { IRootState } from '@/store';
import DashboardWrapper from '@/components/Wrappers/DashboardWrapper';
import DashboardNav from '@/components/DashboardNav';
import { Correct, Person } from '@/icons';

export default function DashboardContent() {
  const router = useRouter();
  const dataConfig = useSelector((state: IRootState) => state.dataConfig);
  const data = dataConfig.find((item) => item.id === Number(router.query.slug));

  return (
    <DashboardWrapper>
      <DashboardNav backButtonText="DASHBOARD" backHref="/" />
      <DashboardWrapper.MainContent>
        <div className="flex flex-shrink-0 flex-col items-center rounded-lg border border-gray-200 bg-white">
          <div className="flex flex-col items-center gap-6 self-stretch p-6">
            <div className="flex flex-col items-start gap-2 self-stretch">
              <div className="flex flex-col items-start gap-1 self-stretch">
                <div className="flex items-start gap-2 self-stretch">
                  <p className="text-sm font-medium not-italic text-gray-400">
                    {data?.itr}
                  </p>
                  <p className="text-sm font-medium not-italic text-gray-400">
                    •
                  </p>
                  <p className="text-sm font-medium not-italic text-gray-400">
                    {data?.date}
                  </p>
                </div>
                <h3 className="overflow-hidden text-xl font-light not-italic text-gray-900">
                  {data?.industry}
                </h3>
              </div>
              <div className="flex items-center gap-1">
                <Person />
                <p className="text-sm font-medium not-italic text-gray-400">
                  {data?.studentName}
                </p>
              </div>
              <div className=" flex items-center justify-between self-stretch">
                <div className="-gap-2 relative flex h-[6px] w-full flex-col items-start justify-center overflow-hidden rounded-lg bg-gray-100">
                  <span
                    style={{
                      width: `${data?.draft ? data?.draft : '100'}%`,
                    }}
                    className={`absolute h-full flex-shrink-0 rounded-lg ${
                      data?.type === 'pending' ? 'bg-purple-200' : 'bg-blue-300'
                    }`}
                  />
                </div>

                {data?.type === 'pending' ? (
                  <p className="text-right text-xs font-extralight not-italic text-gray-400">
                    Draft • {data?.draft}% Completed
                  </p>
                ) : (
                  <p className="flex gap-1 text-right text-xs font-extralight not-italic text-gray-400">
                    <Correct />
                    Final Draft Sent
                  </p>
                )}
              </div>
              <div
                className={`flex items-center justify-between self-stretch rounded-lg ${
                  data?.type === 'pending' ? 'bg-purple-200' : 'bg-blue-300'
                }
               px-6 py-4`}
              >
                <div className="flex items-center gap-1">
                  <h1 className="text-4xl font-light not-italic text-white">
                    {data?.score}
                  </h1>
                  <div className="-gap-1 flex flex-col items-start justify-center">
                    <p className="text-xs font-light not-italic text-white">
                      CURRENT
                    </p>
                    <p className="text-xs font-light not-italic text-white">
                      SCORE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardWrapper.MainContent>
    </DashboardWrapper>
  );
}
